import { useEffect, useState } from 'react'
import { User } from '../../index.types';
import { usePathname, useRouter } from 'next/navigation';

function useGetUser() {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useRouter();
  const pathname = usePathname();

  const getUser = () => {
    const userStringify = localStorage.getItem('user');
    const tokenUser = localStorage.getItem('token');

    setUser(userStringify ? JSON.parse(userStringify) : null);
    setToken(tokenUser);
  }

  const userAuthenticate = () => {
    const userStringify = localStorage.getItem('user');
    const tokenUser = localStorage.getItem('token');

    if (!userStringify && !tokenUser) {
      navigate.push('/login');
    }
  }

  const logout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    getUser();

    navigate.push('/login');
  }

  useEffect(() => {
    getUser();

    setLoading(false);
  }, [pathname]);

  return {
    user,
    setUser,
    token,
    setToken,
    loading,
    userAuthenticate,
    logout,
  }
}

export default useGetUser