import React from "react";

export default function DownloadSavedButton() {

  const handleDownload = () => {

    // Get saved data (string from localStorage)
    const saved = localStorage.getItem("savedJourneys");

    // No saaved data? show alert + exit
    if (!saved) {
      alert("No saved wonders to download.");
      return;
    }

    // Create file blob (browser file object)
    const blob = new Blob([saved], { type: "application/json" });

    // Create temp download link
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "saved-wonders.json";

    // Trigger download
    link.click();

    // Cleanup url after download
    URL.revokeObjectURL(url);
  };

  return (
    <button onClick={handleDownload}>
      Download Saved Wonders
    </button>
  );
}