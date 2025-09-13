// 登录功能实现
function handleLogin() {
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    
    // 基本验证
    if (!username || !password) {
        showMessage('请输入用户名和密码', 'error');
        return;
    }
    
    // 模拟登录验证（实际项目中应该连接后端API）
    if (validateCredentials(username, password)) {
        showMessage('登录成功！正在进入智尚衣橱...', 'success');
        
        // 模拟登录成功后的跳转
        setTimeout(() => {
            // 这里可以跳转到主页面
            console.log('登录成功，用户名:', username);
            // window.location.href = 'dashboard.html'; // 取消注释以启用页面跳转
        }, 2000);
    } else {
        showMessage('用户名或密码错误，请重试', 'error');
    }
}

// 模拟用户验证（实际项目中应该连接后端）
function validateCredentials(username, password) {
    // 这里可以添加更复杂的验证逻辑
    // 目前使用简单的硬编码验证作为示例
    const validUsers = {
        'admin': 'admin123',
        'user': 'user123',
        'demo': 'demo123'
    };
    
    return validUsers[username] === password;
}

// 显示消息提示
function showMessage(message, type) {
    // 移除已存在的消息
    const existingMessage = document.querySelector('.message');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    // 创建消息元素
    const messageDiv = document.createElement('div');
    messageDiv.className = `message message-${type}`;
    messageDiv.textContent = message;
    
    // 添加样式
    messageDiv.style.cssText = `
        position: fixed;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        padding: 15px 30px;
        border-radius: 25px;
        color: white;
        font-weight: bold;
        z-index: 1000;
        animation: slideDown 0.3s ease-out;
        max-width: 90%;
        text-align: center;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    `;
    
    // 根据类型设置背景色
    if (type === 'success') {
        messageDiv.style.background = 'linear-gradient(45deg, #4CAF50, #45a049)';
    } else if (type === 'error') {
        messageDiv.style.background = 'linear-gradient(45deg, #f44336, #da190b)';
    }
    
    // 添加到页面
    document.body.appendChild(messageDiv);
    
    // 3秒后自动移除
    setTimeout(() => {
        if (messageDiv.parentNode) {
            messageDiv.style.animation = 'slideUp 0.3s ease-out';
            setTimeout(() => {
                if (messageDiv.parentNode) {
                    messageDiv.remove();
                }
            }, 300);
        }
    }, 3000);
}

// 添加CSS动画
const style = document.createElement('style');
style.textContent = `
    @keyframes slideDown {
        from {
            opacity: 0;
            transform: translateX(-50%) translateY(-20px);
        }
        to {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
        }
    }
    
    @keyframes slideUp {
        from {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
        }
        to {
            opacity: 0;
            transform: translateX(-50%) translateY(-20px);
        }
    }
`;
document.head.appendChild(style);

// 添加键盘事件监听
document.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        handleLogin();
    }
});

// 页面加载完成后的初始化
document.addEventListener('DOMContentLoaded', function() {
    // 为输入框添加焦点效果
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.style.transform = 'scale(1.02)';
        });
        
        input.addEventListener('blur', function() {
            this.parentElement.style.transform = 'scale(1)';
        });
    });
    
    // 添加加载动画效果
    const loginBtn = document.querySelector('.login-btn');
    loginBtn.addEventListener('click', function() {
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 150);
    });
});

// 添加一些交互效果
function addInteractiveEffects() {
    // 为登录按钮添加点击波纹效果
    const loginBtn = document.querySelector('.login-btn');
    loginBtn.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            left: ${x}px;
            top: ${y}px;
            background: rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            transform: scale(0);
            animation: ripple 0.6s linear;
            pointer-events: none;
        `;
        
        this.style.position = 'relative';
        this.style.overflow = 'hidden';
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
}

// 添加波纹动画CSS
const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(rippleStyle);

// 初始化交互效果
addInteractiveEffects();
