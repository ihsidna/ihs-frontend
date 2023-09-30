import { useMutation } from "@tanstack/react-query";
import UseAxiosPrivate from "./useAxiosPrivate";

export const usePost = () => {
  const axiosPrivate = UseAxiosPrivate();

  const mutation = useMutation({
    mutationFn: async ({ url, body }) => {
      return await axiosPrivate.post(url, JSON.stringify(body), {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
    },
  });
  return mutation;
};

export const usePatch = () => {
  const axiosPrivate = UseAxiosPrivate();

  const mutation = useMutation({
    mutationFn: async ({ url, body }) => {
      return await axiosPrivate.patch(url, JSON.stringify(body), {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
    },
  });
  return mutation;
};

export const useDelete = () => {
  const axiosPrivate = UseAxiosPrivate();

  const mutation = useMutation({
    mutationFn: async (url) => await axiosPrivate.delete(url),
  });
  return mutation;
};
