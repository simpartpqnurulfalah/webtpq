// 1. Inisialisasi OneSignal & Paksa Munculkan Pop-up Izin
window.OneSignalDeferred = window.OneSignalDeferred || [];
OneSignalDeferred.push(async function(OneSignal) {
    await OneSignal.init({
        appId: "8975b58d-f7bd-4217-91a0-acb804361bb5",
        serviceWorkerPath: "sw.js", // Beri tahu OneSignal nama file Mas
        serviceWorkerParam: { scope: "/web/" }, // Beri tahu letak foldernya
        notifyButton: {
            enable: true, // Memunculkan ikon lonceng
        }
    });
    
    // Paksa pop-up izin muncul dari atas
    OneSignal.Slidedown.promptPush();
});
