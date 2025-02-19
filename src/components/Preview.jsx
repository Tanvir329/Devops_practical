import React, { useEffect, useState } from "react";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";

import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

import { useSharedFile } from "../utils/useSharedFile";

const Preview = () => {
    const { sharedFile } = useSharedFile();
    const defaultLayoutPluginInstance = defaultLayoutPlugin({
        sidebarTabs: (defaultTabs) => [],
    });

    const [pdfUrl, setPdfUrl] = useState(null);

    useEffect(() => {
        if (sharedFile) {
            const url = URL.createObjectURL(sharedFile);
            setPdfUrl(url);

            // Clean up the URL when the component unmounts or the file changes
            return () => {
                URL.revokeObjectURL(url);
            };
        } else {
            setPdfUrl(null); // Clear the URL if no file is uploaded
        }
    }, [sharedFile]);

    return (
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.15.349/build/pdf.worker.js">
            <div className="w-3/6 h-auto bg-gray-100 flex flex-col items-center overflow-hidden">
                {pdfUrl ? (
                    <Viewer fileUrl={pdfUrl} plugins={[defaultLayoutPluginInstance]} />
                ) : (
                    <p className="text-center text-gray-600 pt-20">
                        No PDF loaded. Please upload a file.
                    </p>
                )}
            </div>
        </Worker>
    );
};

export default Preview;
