import React from "react";
import { useCloudflare } from "@/context/CloudflareProvider";
import extractBuffer from "../../utils/pdf"

type Props = {};

export default function ChatPlaceholder({setDoc}: {setDoc: React.Dispatch<React.SetStateAction<string>>}) {
  const { updateSystemMessage } = useCloudflare();
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="max-w-3xl p-4 text-center text-primary">
        <h1 className="text-4xl font-medium">ChatCloudflare</h1>
        <p className="mt-4 text-lg">
          LLama chat (+ chat with a PDF) running on <a href="https://ai.cloudflare.com">Cloudflare Workers AI</a>.
        </p>
        <p className="mt-4 text-lg">
        <input
          type="file"
          onChange={(event) => {
            if (!event.target.files) return
            const file = event.target.files[0];
            const reader = new FileReader();
            reader.onloadend = () => {
              const buffer = reader.result;
              extractBuffer(buffer)?.then(pdfData => {
                let allText = '';
                pdfData.pages.forEach((page: { content: any[]; }) => {
                  page.content.forEach((item: { str: string; }) => {
                    allText += item.str + ' ';
                  });
                });
                updateSystemMessage(`Context:\n"""\n${allText}\n"""\n\nWhen answering the question or responding, use the Context provided.`);
                console.log(allText); // Here is the concatenated string
              });
            };
            reader.readAsArrayBuffer(file);
          }}
        />
        </p>
      </div>
    </div>
  );
}
