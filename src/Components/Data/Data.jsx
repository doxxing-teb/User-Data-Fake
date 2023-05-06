const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      const response = await fetch('https://randomuser.me/api/');
      const data = await response.json();
      setUserData(data.results[0]);
    };

    fetchUserData();
  }, []);

  if (!userData) {
    return <div>Loading...</div>;
  }