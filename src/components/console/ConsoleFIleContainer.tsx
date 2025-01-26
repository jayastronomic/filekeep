import { FC } from "react";
import { Link } from "react-router";
import { RiFileList2Fill } from "react-icons/ri";
import { FaImage } from "react-icons/fa6";
import { TbPdf } from "react-icons/tb";
import { TfiDownload } from "react-icons/tfi";
import PopUp from "./PopUp";
import FileEndpoint from "../../endpoints/FileEndpoint";

const ConsoleFileContainer: FC<ConsoleFileContainerProps> = ({ files }) => {
  if (files.length === 0) return <></>;

  const getFileIcon = (mimeType: string) => {
    switch (mimeType) {
      case "text/plain":
        return <RiFileList2Fill />;
      case "application/pdf":
        return <TbPdf />;
      case "image/png":
        return <FaImage />;
      default:
        return;
    }
  };

  const downloadFile = (fileKey: string, fileName: string) => {
    FileEndpoint.downloadFile(fileKey, fileName);
  };

  return (
    <div className="flex flex-col">
      {files.map((file) => {
        return (
          <div
            key={file.fileKey}
            className="flex border-b py-4 hover:bg-gray-100 text-gray-800 items-center justify-between px-2"
          >
            <div className="flex space-x-2">
              <div className="text-2xl">{getFileIcon(file.mimeType)}</div>
              <Link to="#">{file.fileName}</Link>
            </div>
            <button
              onClick={() => downloadFile(file.fileKey, file.fileName)}
              className="flex items-center justify-center relative hover:bg-gray-300 h-10 w-10 rounded transition group"
            >
              <TfiDownload />
              <PopUp />
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default ConsoleFileContainer;
