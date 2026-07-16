# Shake Detector

<p align="center">
  Aplikasi Flutter untuk mendeteksi goyangan perangkat menggunakan sensor accelerometer.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Flutter-3.x-02569B?logo=flutter&logoColor=white" alt="Flutter">
  <img src="https://img.shields.io/badge/Dart-3.x-0175C2?logo=dart&logoColor=white" alt="Dart">
  <img src="https://img.shields.io/badge/Platform-Android%20%7C%20iOS-34A853" alt="Platform">
  <img src="https://img.shields.io/badge/Status-Aktif-success" alt="Status">
  <img src="https://img.shields.io/badge/Lisensi-MIT-yellow" alt="Lisensi">
</p>

---

## Tentang Aplikasi

**Shake Detector** adalah aplikasi mobile berbasis Flutter yang dapat mendeteksi goyangan perangkat secara langsung menggunakan data accelerometer.

Aplikasi membaca nilai percepatan pada sumbu X, Y, dan Z. Nilai tersebut kemudian dihitung untuk menentukan kekuatan gerakan perangkat. Saat kekuatan gerakan melewati batas sensitivitas, aplikasi akan mencatatnya sebagai satu goyangan.

Aplikasi ini dibuat sebagai implementasi penggunaan sensor perangkat bergerak pada Flutter.

## Fitur Utama

- Membaca data accelerometer secara real-time
- Mendeteksi goyangan perangkat
- Menampilkan nilai sumbu X, Y, dan Z
- Menampilkan kekuatan gerakan
- Menghitung jumlah goyangan
- Mengatur sensitivitas deteksi
- Menjalankan dan menghentikan sensor
- Mereset penghitung goyangan
- Mencegah deteksi ganda dengan sistem cooldown
- Menangani kesalahan sensor
- Menggunakan tampilan glassmorphism
- Menggunakan efek glow dan animasi
- Menggunakan struktur kode modular

## Cara Kerja

Aplikasi menggunakan `UserAccelerometerEvent` dari package `sensors_plus`.

Kekuatan gerakan dihitung dengan rumus:

```text
kekuatan = √(x² + y² + z²)
```

Keterangan:

- `x` adalah nilai percepatan pada sumbu X
- `y` adalah nilai percepatan pada sumbu Y
- `z` adalah nilai percepatan pada sumbu Z

Goyangan terdeteksi saat nilai kekuatan gerakan mencapai atau melewati batas sensitivitas.

Aplikasi juga menggunakan waktu jeda atau cooldown agar satu goyangan tidak dihitung berkali-kali dalam waktu yang sangat singkat.

## Teknologi yang Digunakan

| Teknologi | Fungsi |
|---|---|
| Flutter | Framework aplikasi mobile |
| Dart | Bahasa pemrograman |
| sensors_plus | Mengakses data accelerometer |
| ChangeNotifier | Mengelola state aplikasi |
| Material 3 | Komponen dan tema antarmuka |
| BackdropFilter | Membuat efek glassmorphism |
| AnimationController | Mengelola animasi glow dan pulse |

## Struktur Proyek

```text
lib/
├── main.dart
├── app/
│   └── app.dart
├── core/
│   ├── constants/
│   │   ├── app_colors.dart
│   │   └── app_durations.dart
│   └── theme/
│       └── app_theme.dart
└── features/
    └── shake_detector/
        ├── data/
        │   ├── models/
        │   │   └── sensor_reading.dart
        │   └── services/
        │       └── accelerometer_service.dart
        └── presentation/
            ├── controllers/
            │   └── shake_detector_controller.dart
            ├── pages/
            │   └── shake_detector_page.dart
            └── widgets/
                ├── detector_indicator.dart
                ├── glass_panel.dart
                ├── glow_blob.dart
                ├── sensor_data_card.dart
                ├── shake_action_buttons.dart
                ├── shake_header.dart
                ├── shake_status.dart
                ├── sensitivity_card.dart
                └── summary_cards.dart
```

## Arsitektur Proyek

Proyek dipisahkan menjadi beberapa bagian agar kode lebih mudah dibaca, dirawat, dan dikembangkan.

### Data

Bagian data menangani model dan akses sensor.

```text
data/models/
data/services/
```

### Presentation

Bagian presentation menangani tampilan, interaksi pengguna, state, dan animasi.

```text
presentation/controllers/
presentation/pages/
presentation/widgets/
```

### Core

Bagian core menyimpan warna, durasi animasi, dan tema yang digunakan bersama.

```text
core/constants/
core/theme/
```

## Logika Utama Deteksi

Kekuatan gerakan dihitung dari seluruh sumbu accelerometer:

```dart
final double strength = math.sqrt(
  (event.x * event.x) +
  (event.y * event.y) +
  (event.z * event.z),
);
```

Deteksi dilakukan saat kekuatan gerakan mencapai threshold:

```dart
final bool shakeDetected =
    reading.strength >= threshold &&
    cooldownFinished;
```

## Roadmap

- [x] Membaca accelerometer secara real-time
- [x] Mendeteksi goyangan
- [x] Menghitung jumlah goyangan
- [x] Mengatur sensitivitas
- [x] Menampilkan nilai X, Y, dan Z
- [x] Menampilkan kekuatan gerakan
- [x] Menjalankan dan menghentikan sensor
- [x] Membuat tampilan glassmorphism
- [x] Menambahkan efek glow
- [ ] Menambahkan getaran saat goyangan terdeteksi
- [ ] Menambahkan suara notifikasi
- [ ] Menyimpan riwayat deteksi
- [ ] Menambahkan pengujian unit
- [ ] Menambahkan pilihan tema


## Pengembang

**Ariani Putri Andini**


---

<p align="center">
  Dibuat menggunakan Flutter dan Dart.
</p>
