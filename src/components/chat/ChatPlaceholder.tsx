import React from "react";
import { useCloudflare } from "@/context/CloudflareProvider";
import extractBuffer from "../../utils/pdf"
import llamaTokenizer from 'llama-tokenizer-js'

type Props = {};

export default function ChatPlaceholder({setDoc}: {setDoc: React.Dispatch<React.SetStateAction<string>>}) {
  const { updateSystemMessage, setDocFilename } = useCloudflare();
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="max-w-3xl p-4 text-center text-primary">
        <h1 className="text-4xl font-medium">Mistral on Cloudflare</h1>
        <p className="mt-4 text-lg">
          Mistral chat running on <a href="https://ai.cloudflare.com">Cloudflare Workers AI</a>.
        </p>
        <p className="mt-4 text-lg">
        {/* <input
          type="file"
          onChange={(event) => {
            if (!event.target.files) return
            const file = event.target.files[0];
            setDocFilename(file.name);
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
                // let tokens = llamaTokenizer.encode(allText);
                // console.log(`Uploaded file total tokens: ${tokens.length}`)
                // tokens = tokens.slice(0, 3500); // TODO set based on model context size
                // console.log(`Truncated tokens: ${tokens.length}`)
                // const truncatedText = llamaTokenizer.decode(tokens);
                // Cloudflare Mistral has limit of 4096
                const truncatedText = allText.slice(0, 3000*4);
                console.log(`Truncated text: \n\n`)
                console.log(truncatedText); // Here is the concatenated string
                updateSystemMessage(`Context:\n"""\n${truncatedText}\n"""\n\nWhen answering the question or responding, use the Context provided.`);
              });
            };
            reader.readAsArrayBuffer(file);
          }}
        /> */}
        </p>
      </div>
    </div>
  );
}
