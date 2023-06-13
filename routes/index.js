const express = require("express");
const router = express.Router();
const duanControllers = require('../controllers/duan/index.js');
//Thêm dự án
router.post('/api/duan', duanControllers.postDuAn);
module.exports = router;
//Xóa dự án
router.delete('/api/duan/:id', duanControllers.deleteDuAn);
module.exports = router;

//lấy hết dự án
router.get('/api/duan', duanControllers.getDuAn);
module.exports = router;

//tím dự án
router.put('/api/duan/:id', duanControllers.putDuAn);
module.exports = router;