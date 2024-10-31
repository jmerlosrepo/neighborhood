import { useState, useEffect } from "react";
import axios from "axios";

type ID = {
  id?: string;
};

const useHttpRequest = <T extends ID>(url: string) => {
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let ignore = false;
    const controller = new AbortController();
    const { signal } = controller;

    setLoading(true);

    axios
      .get<{ elements: T[] }>(url, { signal })
      .then(({ data }) => {
        if (!ignore) {
          setData(data.elements);
        }
      })
      .catch((error) => {
        if (!ignore) {
          setError("Failed to fetch data");
          console.error(error);
        }
      })
      .finally(() => {
        if (!ignore) {
          setLoading(false);
        }
      });
  }, []);

  const addElement = async (newElement: T, postUrl: string) => {
    setLoading(true);
    setError(null);

    const initialData = [...data];
    setData([newElement, ...initialData]);

    try {
      await axios.post<{ element: T }>(postUrl, newElement);
    } catch (error) {
      setData(initialData);
      setError("Error adding element");
      console.error("Error adding element:", error);
    } finally {
      setLoading(false);
    }
  };

  const removeElement = async (id: string, deleteUrl: string) => {
    setLoading(true);
    setError(null);

    const initialData = [...data];
    setData(initialData.filter((initial) => initial.id !== id));

    try {
      await axios.delete<T>(`${deleteUrl}/${id}`);
    } catch (error) {
      setData(initialData);
      setError("Error removing element");
      console.error("Error removing element:", error);
    } finally {
      setLoading(false);
    }
  };

  const updateElement = async (updateUrl: string, updateElement: T) => {
    setError(null);
    setLoading(true);

    const initialData = [...data];
    setData(data.map((d) => (d.id === updateElement.id ? updateElement : d)));

    try {
      await axios.put<T>(updateUrl, updateElement);
    } catch (error) {
      setData(initialData);
      setError("Error removing element");
      console.error("Error removing element:", error);
    } finally {
      setLoading(false);
    }
  };

  return {
    data,
    error,
    setData,
    loading,
    setLoading,
    addElement,
    removeElement,
    updateElement,
  };
};

export default useHttpRequest;
