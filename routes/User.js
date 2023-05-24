import express from 'express'
import { addTask, forgetPassword, getMyProfile, login, logout, register, removeTask, resetPassword, updatePassword, updateProfile, updateTask, verify } from '../controllers/User.js'
import { isAuthenticated } from '../middlewares/auth.js'

const router = express.Router()

router.post('/register', register)
router.post('/verify', isAuthenticated, verify)
router.post('/login', login)
router.post('/logout', logout)

router.post('/addtask', isAuthenticated, addTask)
router.get('/updatetask/:taskId', isAuthenticated, updateTask)
router.delete('/removetask/:taskId', isAuthenticated, removeTask)

router.get('/profile', isAuthenticated, getMyProfile)
router.put('/updateprofile', isAuthenticated, updateProfile)
router.put('/updatepassword', isAuthenticated, updatePassword)
router.post('/forgetpassword', forgetPassword)
router.post('/resetpassword', resetPassword)

export default router