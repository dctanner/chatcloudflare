import { useCloudflare } from "@/context/CloudflareProvider";
import React from "react";
import { MdPictureAsPdf } from "react-icons/md";

export default function ChatDocFilename() {
  const { docFilename } = useCloudflare();

  return (
    <div
      className={`flex cursor-pointer flex-row items-center p-4 transition-all bg-secondary`}
    >
      <div className="relative max-w-screen mx-auto flex w-full max-w-4xl flex-row items-center">
        <div
          className={`flex sticky top-0 my-4 h-10 w-10 items-center justify-center text-4xl mr-2 self-start transition-colors text-primary/20`}
        >
          <MdPictureAsPdf />
        </div>
        <div className="overflow-x-auto">
          <div className="text-md prose w-full max-w-4xl rounded p-4 text-primary/75 dark:prose-invert prose-code:text-primary prose-pre:bg-transparent prose-pre:p-0">
            <div className="whitespace-pre-line">{docFilename}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
