import { ChangeEvent, Dispatch, ReactNode, SetStateAction } from "react";

declare global {
  interface User {
    id?: string;
    email: string;
    firstName: string;
    lastName: string;
    password?: string;
    passwordConfirmation?: string;
  }

  interface Folder {
    id: string;
    folderName: string;
    parentFolder: Folder | null;
    subFolders: Folder[];
    files: FKFile[];
  }

  interface NewFolder {
    folderName: string;
    parentName: string;
  }

  interface FKFile {
    id: string;
    fileName: string;
    size: number;
    mimeType: string;
    fileKey: string;
  }

  interface AuthContextData {
    authUser: User | null;
    isLoading?: boolean;
  }

  interface ConsoleContextData {
    rootFolder: Folder;
    isLoading: boolean;
  }

  interface ConsoleProviderProps {
    children: ReactNode;
  }

  interface TextFieldProps {
    label: string;
    type?: string;
    name: string;
    value: string;
    placeholder?: string;
    required?: boolean;
    autoFocus?: boolean;
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  }

  interface SignUpProps {
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
    user: User;
    isPending: boolean;
  }

  interface LogInPrps {
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
    user: User;
    isPending: boolean;
  }

  interface ApiResponse<T> {
    data: T;
    status: "SUCCESS" | "ERROR";
    message: string;
    path: string;
  }

  interface AuthProviderProps {
    children: ReactNode;
  }

  interface ConsoleActionProps {
    label: string;
    icon: ReactNode;
    action: (() => void) | (() => Dispatch<SetStateAction<boolean>>);
  }

  interface ConsoleActionsProps {
    setIsCreateFolderModalOpen: Dispatch<SetStateAction<boolean>>;
  }

  type ConsoleAction = {
    label: string;
    icon: ReactNode;
  };

  interface ConsoleFileContainerProps {
    files: FKFile[];
  }

  interface ConsoleFolderContainerProps {
    folders: Folder[];
  }

  interface CreateFolderModalProps {
    setIsCreateFolderModalOpen: Dispatch<SetStateAction<boolean>>;
  }

  interface ProfileMenuProps {
    setIsProfileMenuOpen: Dispatch<SetStateAction<boolean>>;
  }

  interface AssetCardProps {
    type: "folder" | "file";
    asset: Folder | FKFile;
  }

  interface MoreMenuProps {
    type: "folder" | "file";
    asset: FKFile | Folder;
    setIsOpen: Dispatch<SetStateAction<string | null>>;
    handleDelete: (fileKey: string) => void;
  }

  interface FileKeepIconProps {
    height: string;
    width: string;
    viewBox: string;
    className?: string;
  }
  interface FileKeepTextSvgProps {
    height: string;
    width: string;
    viewBox: string;
    className?: string;
  }

  interface ConsoleControlsProps {
    setIsProfileMenuOpen: Dispatch<SetStateAction<boolean>>;
    setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
    consoleScrollPosition: number;
  }

  interface ConsoleNavProps {
    isMenuOpen: boolean;
    setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
  }

  interface ErrorBannerProps {
    message: string;
  }
}

export {};
