let io;

module.exports = {
    init: httpServer => {
        io = require('socket.io')(httpServer, {
            cors: {
                origin: 'http://localhost:3000', // Since Socket.IO v3, you need to explicitly enable Cross-Origin Resource Sharing (CORS).
                methods: ['GET', 'POST']
            }
        });
        return io;
    },
    getIO: () => {
        if (!io) {
            throw new Error('Socket.io not initialized');
        }
        return io;
    }
};