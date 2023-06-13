const connectDatabase = require ('../../config/config.js');
const connection = connectDatabase();
const moment = require('moment');

function postDuAn(req, res){
    // const {originalname} = req.file;
    const { TenDuAn, MoTaDuAn, NgayBatDau, NgayKetThuc, TrangThai } = req.body;
    const timestamp = moment().format('x');
    const MaDuAn = 'DA' + timestamp;
    const query = 'INSERT INTO duan (MaDuAn, TenDuAn, MoTaDuAn, NgayBatDau, NgayKetThuc, TrangThai) VALUES (?, ?, ?, ?, ?, ?)'
    connection.query(query, [MaDuAn, TenDuAn, MoTaDuAn, NgayBatDau, NgayKetThuc, TrangThai], (error, results)=>{
        if (error){
            console.error('Lỗi truy vấn: ', error);
            res.status(500).json({error: 'Lối truy vấn cơ sở dữ liệu.'});
        } else{
            res.json({message: 'Thêm dự án thành công'});
        }
    });
  };

  function deleteDuAn(req, res) {
    const id = req.params.id;
    const query = 'DELETE FROM duan WHERE MaDuAn = ?';
    connection.query(query, [id], (error, results) => {
      if (error) {
        console.error('Lỗi truy vấn: ', error);
        res.status(500).json({ error: 'Lỗi truy vấn cơ sở dữ liệu.' });
      } else if (results.affectedRows === 0) {
        res.status(404).json({ error: 'Không tìm thấy dự án.' });
      } else {
        res.json({ message: 'Xóa dự án thành công.' });
      }
    });
  };

function  getDuAn( req, res) {
    const query = 'SELECT * FROM duan';
    connection.query(query, (error, results) => {
      if (error) {
        console.error('Lỗi truy vấn: ', error);
        res.status(500).json({ error: 'Lỗi truy vấn cơ sở dữ liệu.' });
      } else {
        res.json(results);
      }
    });
  };

function  putDuAn(req, res) {
    const MaDuAn = req.params.id;
    const { TenDuAn, MoTaDuAn, NgayBatDau, NgayKetThuc, TrangThai } = req.body;
    const query = 'UPDATE duan SET TenDuAn= ?, MoTaDuAn = ?, NgayBatDau= ?, NgayKetThuc= ?, TrangThai= ? WHERE MaDuAn = ?';
    connection.query(query, [TenDuAn, MoTaDuAn, NgayBatDau, NgayKetThuc, TrangThai, MaDuAn], (error, results) => {
      if (error) {
        console.error('Lỗi truy vấn: ', error);
        res.status(500).json({ error: 'Lỗi truy vấn cơ sở dữ liệu.' });
      } else if (results.affectedRows === 0) {
        res.status(404).json({ error: 'Không tìm thấy dự án.' });
      } else {
        res.json({ MaDuAn, TenDuAn, MoTaDuAn, NgayBatDau, NgayKetThuc, TrangThai });
      }
    });
  };
  
  module.exports = {
    postDuAn,
    deleteDuAn,
    getDuAn,
    putDuAn
  }

