import Head from "next/head";
import React from "react";
import PlaygroundMessages from "@/components/playground/PlaygroundMessages";
import PlaygroundHeader from "@/components/playground/PlaygroundHeader";
import SystemMessage from "@/components/playground/SystemMessage";
import PlaygroundConversations from "@/components/playground/conversations/PlaygroundConversations";
import PlaygroundProvider from "@/context/PlaygroundProvider";

export default function Playground() {
  return (
    <React.Fragment>
      <Head>
        <title>Mistral on Cloudflare Playground</title>
        <meta name="description" content="Chat with Mistral on Cloudflare Workers AI." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="max-w-screen relative flex max-h-screen w-screen flex-col">
        <PlaygroundProvider>
          <PlaygroundHeader />
          <div className="flex h-[calc(100vh-60px)] max-h-[calc(100vh-60px)] grow flex-row">
            <div className="flex grow flex-col items-stretch md:flex-row">
              <PlaygroundConversations />
              <div className="flex grow">
                <SystemMessage />
              </div>
              <div className="flex grow basis-7/12 overflow-hidden">
                <PlaygroundMessages />
              </div>
            </div>
          </div>
        </PlaygroundProvider>
      </main>
    </React.Fragment>
  );
}
