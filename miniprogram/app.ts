// app.ts
App<IAppOption>({
    globalData: {},
    onLaunch() {
        // Initialize Cloud Development
        wx.cloud.init({
            traceUser: true,
        });

        // Logs (optional standard boilerlate)
        const logs = wx.getStorageSync('logs') || []
        logs.unshift(Date.now())
        wx.setStorageSync('logs', logs)
    },
})
