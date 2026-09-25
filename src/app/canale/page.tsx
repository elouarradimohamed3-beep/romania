import type { Metadata } from "next";
import { site } from "@/lib/site";
import ChannelSearch from "./ChannelSearch";

export const metadata: Metadata = {
  title: "Listă canale",
  description: "Caută printre miile de canale IPTV România: sport, filme, știri, copii și documentare.",
};

export default function ChannelsPage() {
  return (
    <div className="container-page py-16">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="text-4xl font-extrabold">Listă canale</h1>
        <p className="mt-3 text-muted">
          Peste {site.channels} de canale live. Caută mai jos o selecție a categoriilor populare.
        </p>
      </div>
      <div className="mx-auto mt-10 max-w-4xl">
        <ChannelSearch />
      </div>
    </div>
  );
}
