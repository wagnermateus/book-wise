import { BookSideBarProps } from "@/components/BookSideBar/index.page";
import { api } from "@/lib/axios";
import { ReactNode, createContext, useState } from "react";

interface BookContextProps {
  bookData: BookSideBarProps;
  handleViewBook: (id: string) => void;
}
interface BookContextProviderProps {
  children: ReactNode;
}
export const bookContext = createContext({} as BookContextProps);

export function BookContextProvider({ children }: BookContextProviderProps) {
  const [bookData, setBookData] = useState<BookSideBarProps>(
    {} as BookSideBarProps
  );

  function handleViewBook(id: string) {
    api.get("/book", { params: { bookid: id } }).then((response) => {
      setBookData(response.data);
    });
  }

  return (
    <bookContext.Provider value={{ bookData, handleViewBook }}>
      {children}
    </bookContext.Provider>
  );
}
