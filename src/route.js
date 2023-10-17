const UserController = require('./controllers/UserController')
const CameraController = require('./controllers/CameraController')
const UserAuthenController = require('./controllers/UserAuthenController');
const isAuthenController = require('./authen/isAuthenController')

module.exports = (app) => {
    app.post('/user', UserController.create)//สร้าง
    
    app.put('/user/:userId', UserController.put)//แก้ไข
    
    app.delete('/user/:userId', UserController.remove)//ลบ
    
    app.get('/user/:userId', UserController.show)//ดูผู้ใช้
    
    app.get('/users', isAuthenController, UserController.index)//ดูทั้งหมด

    //camera
    app.post('/camera', CameraController.create)
    
    app.put('/camera/:cameraId', CameraController.put)
    
    app.delete('/camera/:cameraId', CameraController.remove)
    
    app.get('/camera/:cameraId', CameraController.show)
    
    app.get('/cameras', CameraController.index)

    //login
    app.post('/login', UserAuthenController.login)
}