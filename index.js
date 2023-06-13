
const port = 9000;
const bodyParser = require('body-parser');
const cors = require ('cors');
const moment = require('moment');
const multer =  require('multer');
const express =  require('express');
const app = express();
const routes = require('./routes');
app.use(bodyParser.json());

// Sử dụng middleware cho CORS
app.use(cors());
app.use(routes);


// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password:'',
//   database: 'qlda'
// });

// connection.connect((err) => {
//   if (err) {
//     console.error('Lỗi kết nối cơ sở dữ liệu: ', err.stack);
//     return;
//   }
//   console.log('Đã kết nối thành công đến cơ sở dữ liệu MySQL!' + connection.threadId);
// });

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
// // upload và đổi tên phù hợp lưu ở thư mục gốc
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, 'public/file/'); // Đường dẫn thư mục đích
//   },
//   filename: function (req, file, cb) {
//     cb(null, file.originalname); // Sử dụng tên ban đầu của file làm tên file lưu trữ
//   }
// });
// const upload = multer({ storage: storage });
// Thêm dự án
// app.post('/api/duan',(req, res)=>{
//   // const {originalname} = req.file;
//   const { TenDuAn, MoTaDuAn, NgayBatDau, NgayKetThuc, TrangThai } = req.body;
//   const timestamp = moment().format('x');
//   const MaDuAn = 'DA' + timestamp;
//   const query = 'INSERT INTO duan (MaDuAn, TenDuAn, MoTaDuAn, NgayBatDau, NgayKetThuc, TrangThai) VALUES (?, ?, ?, ?, ?, ?)'
//   connection.query(query, [MaDuAn, TenDuAn, MoTaDuAn, NgayBatDau, NgayKetThuc, TrangThai], (error, results)=>{
//       if (error){
//           console.error('Lỗi truy vấn: ', error);
//           res.status(500).json({error: 'Lối truy vấn cơ sở dữ liệu.'});
//       } else{
//           res.json({message: 'Thêm tài liệu thành công'});
//       }
//   });
// });

// Xóa dự án
// app.delete('/api/duan/:id', (req, res) => {
//   const id = req.params.id;
//   const query = 'DELETE FROM duan WHERE MaDuAn = ?';
//   connection.query(query, [id], (error, results) => {
//     if (error) {
//       console.error('Lỗi truy vấn: ', error);
//       res.status(500).json({ error: 'Lỗi truy vấn cơ sở dữ liệu.' });
//     } else if (results.affectedRows === 0) {
//       res.status(404).json({ error: 'Không tìm thấy tài liệu.' });
//     } else {
//       res.json({ message: 'Xóa tài liệu thành công.' });
//     }
//   });
// });

//Cập nhật dự án
// app.put('/api/duan/:id', (req, res) => {
//   const MaDuAn = req.params.id;
//   const { TenDuAn, MoTaDuAn, NgayBatDau, NgayKetThuc, TrangThai } = req.body;
//   const query = 'UPDATE duan SET TenDuAn= ?, MoTaDuAn = ?, NgayBatDau= ?, NgayKetThuc= ?, TrangThai= ? WHERE MaDuAn = ?';
//   connection.query(query, [TenDuAn, MoTaDuAn, NgayBatDau, NgayKetThuc, TrangThai, MaDuAn], (error, results) => {
//     if (error) {
//       console.error('Lỗi truy vấn: ', error);
//       res.status(500).json({ error: 'Lỗi truy vấn cơ sở dữ liệu.' });
//     } else if (results.affectedRows === 0) {
//       res.status(404).json({ error: 'Không tìm thấy dự án.' });
//     } else {
//       res.json({ MaDuAn, TenDuAn, MoTaDuAn, NgayBatDau, NgayKetThuc, TrangThai });
//     }
//   });
// });

// {
//   "MaDuAn": "DA002",
//   "TenDuAn": "TTTT 2023_DI19A2",
//   "MoTaDuAn": "Thực tập thực tế 2023 lớp DI19A2",
//   "NgayBatDau": "1899-11-29T17:17:56.000Z",
//   "NgayKetThuc": "1899-11-29T17:17:56.000Z",
//   "TrangThai": 0
// }

// Lấy toàn bộ dự án
// app.get('/api/duan', (req, res) => {
//   const query = 'SELECT * FROM duan';
//   connection.query(query, (error, results) => {
//     if (error) {
//       console.error('Lỗi truy vấn: ', error);
//       res.status(500).json({ error: 'Lỗi truy vấn cơ sở dữ liệu.' });
//     } else {
//       res.json(results);
//     }
//   });
// });










