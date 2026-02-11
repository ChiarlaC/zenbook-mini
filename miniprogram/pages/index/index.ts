// index.ts
Page({
    data: {
        showInput: false,
        inputValue: ''
    },
    onLoad() {

    },

    onTapAdd() {
        this.setData({
            showInput: true
        });
    },

    onHideInput() {
        this.setData({
            showInput: false,
            inputValue: '' // Reset input
        });
    },

    onInputConfirm(e: any) {
        const value = e.detail.value;
        console.log("User Input:", value);

        if (value && value.trim()) {
            wx.showToast({
                title: '记下来了!',
                icon: 'success'
            });
            // TODO: Parse and save transaction
        }

        this.onHideInput();
    }
})
