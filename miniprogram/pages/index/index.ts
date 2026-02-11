// index.ts
import { parseTransaction } from '../../utils/parser';

Page({
    data: {
        showInput: false,
        inputValue: '',
        balance: 18000, // Balance in cents (¥180.00)
        displayBalance: '180.00' // Formatted string
    },

    onLoad() {
        this.updateDisplayBalance();
    },

    updateDisplayBalance() {
        const balanceYuan = (this.data.balance / 100).toFixed(2);
        this.setData({
            displayBalance: balanceYuan
        });
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

        if (!value || !value.trim()) {
            this.onHideInput();
            return;
        }

        const result = parseTransaction(value);

        if (result) {
            console.log("Parsed Transaction:", result);

            // Update Local State (Optimistic UI)
            const newBalance = this.data.balance - result.amount;

            this.setData({
                balance: newBalance
            });

            this.updateDisplayBalance();

            wx.showToast({
                title: '已记一笔',
                icon: 'success'
            });

        } else {
            wx.showToast({
                title: '格式错误',
                icon: 'none'
            });
        }

        this.onHideInput();
    }
})
