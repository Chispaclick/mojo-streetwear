import { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "../firebase/firebase";

interface UserData {
    uid: string;
    email: string | null;
    role: "admin" | "user";
}

interface AuthContextType {
    user: UserData | null;
    loading: boolean;
}

const AuthContext = createContext<AuthContextType>({
    user: null,
    loading: true,
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<UserData | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
            if (!currentUser) {
                setUser(null);
                setLoading(false);
                return;
            }
            console.log("UID:", currentUser.uid);

            // 🔥 leer rol desde Firestore
            const userRef = doc(db, "users", currentUser.uid);
            const snap = await getDoc(userRef);

            const role = snap.exists() ? snap.data().role : "user";
            console.log("Firestore role:", snap.data()?.role);

            setUser({
                uid: currentUser.uid,
                email: currentUser.email,
                role,
            });

            setLoading(false);
        });

        return unsubscribe;
    }, []);

    return (
        <AuthContext.Provider value={{ user, loading }}>
            {children}
        </AuthContext.Provider>
    );

};

export const useAuth = () => useContext(AuthContext);
