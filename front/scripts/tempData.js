const tempData = [
  {
    title: "The Lord of the Rings: The Fellowship of the Ring",
    year: 2001,
    director: "Peter Jackson",
    duration: "2h 58min",
    genre: ["Action", "Adventure", "Drama", "Fantasy"],
    rate: 8.8,
    poster:"https://image.tmdb.org/t/p/original/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg",
    src: "https://player.cuevana.biz/player.php?h=L_S5.I9TT8gF_oMzWJhf_eNGUDdTFwPsdKcEJ9weoPnINsI0KrvSKYrgbm8qxW49"
  },
  {
    "title": "Inception",
    "year": 2010,
    "director": "Christopher Nolan",
    "duration": "2h 28min",
    "genre": ["Action", "Adventure", "Sci-Fi", "Thriller"],
    "rate": 8.8,
    "poster": "https://image.tmdb.org/t/p/original/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg",
    "src": "https://player.cuevana.biz/player.php?h=L_S5.I9TT8gF_oMzWJhf_fZjAFFOeUAUpXqekWDrDbobEgpP40AHSdm9TcrOEX2i"
  },
  {
    title: "The Shawshank Redemption",
    year: 1994,
    director: "Frank Darabont",
    duration: "2h 22min",
    genre: ["Drama"],
    rate: 9.3,
    poster: "https://image.tmdb.org/t/p/original/lyQBXzOQSuE59IsHyhrp0qIiPAz.jpg",
    src: "https://player.cuevana.biz/player.php?h=b4V4QCQH04mLSy2ukvmtf36fj3nQDvRtcJVYLz1MFnCx8ZfKrm5gXjmpADGIGDD6"
  },
  {
    title: "Pulp Fiction",
    year: 1994,
    director: "Quentin Tarantino",
    duration: "2h 34min",
    genre: ["Crime", "Drama"],
    rate: 8.9,
    poster: "https://image.tmdb.org/t/p/original/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg",
    src: "https://player.cuevana.biz/player.php?h=eH0zYI4_M43LKCz95JRQwjhEFj8yx6j0uscfVqvGgbg-"
  },
  {
    title: "The Dark Knight",
    year: 2008,
    director: "Christopher Nolan",
    duration: "2h 32min",
    genre: ["Action", "Crime", "Drama", "Thriller"],
    rate: 9.0,
    poster: "https://image.tmdb.org/t/p/original/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    src: "https://streamwish.to/e/6dz22bl4exq4"
  },
  {
    title: "Forrest Gump",
    year: 1994,
    director: "Robert Zemeckis",
    duration: "2h 22min",
    genre: ["Drama", "Romance"],
    rate: 8.8,
    poster: "https://image.tmdb.org/t/p/original/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg",
    src: "https://streamwish.to/e/nnk58kzyokvk"
  },
  {
    title: "The Matrix",
    year: 1999,
    director: "The Wachowskis",
    duration: "2h 16min",
    genre: ["Action", "Sci-Fi"],
    rate: 8.7,
    poster: "https://image.tmdb.org/t/p/original/dXNAPwY7VrqMAo51EKhhCJfaGb5.jpg",
    src: "https://player.cuevana.biz/player.php?h=eH0zYI4_M43LKCz95JRQwu0PSbfYR1KAyqIEtWseiQY-"
  },
  {
    title: "The Godfather",
    year: 1972,
    director: "Francis Ford Coppola",
    duration: "2h 55min",
    genre: ["Crime", "Drama"],
    rate: 9.2,
    poster: "https://image.tmdb.org/t/p/original/3Tf8vXykYhzHdT0BtsYTp570JGQ.jpg",
    src: "https://streamwish.to/e/bqcd5be7iat7"
  },
  {
    title: "Schindler's List",
    year: 1993,
    director: "Steven Spielberg",
    duration: "3h 15min",
    genre: ["Biography", "Drama", "History"],
    rate: 8.9,
    poster: "https://image.tmdb.org/t/p/original/sF1U4EUQS8YHUYjNl3pMGNIQyr0.jpg",
    src: "https://player.cuevana.biz/player.php?h=fXuMjvaiA4iZ_F_4aa6TH45dIAT66sLKq6O0ebEERW0-" 
  },
  {
    title: "Fight Club",
    year: 1999,
    director: "David Fincher",
    duration: "2h 19min",
    genre: ["Drama"],
    rate: 8.8,
    poster: "https://image.tmdb.org/t/p/original/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg",
    src: "https://streamwish.to/e/wymjh93vztpq"
  },
  {
    title: "The Lord of the Rings: The Two Towers",
    year: 2002,
    director: "Peter Jackson",
    duration: "2h 59min",
    genre: ["Action", "Adventure", "Drama", "Fantasy"],
    rate: 8.7,
    poster: "https://image.tmdb.org/t/p/original/5VTN0pR8gcqV3EPUHHfMGnJYN9L.jpg",
    src: "https://player.cuevana.biz/player.php?h=b4V4QCQH04mLSy2ukvmtf5l2lgFLoiXESUOR_ClFNIy2N_hMD7tC0zff7eLGlGq0"
  },
  {
    title: "Goodfellas",
    year: 1990,
    director: "Martin Scorsese",
    duration: "2h 26min",
    genre: ["Biography", "Crime", "Drama"],
    rate: 8.7,
    poster: "https://image.tmdb.org/t/p/original/aKuFiU82s5ISJpGZp7YkIr3kCUd.jpg",
    src: "https://streamwish.to/e/tj9zxc3i57x9"
  },
  {
    title: "The Green Mile",
    year: 1999,
    director: "Frank Darabont",
    duration: "3h 9min",
    genre: ["Crime", "Drama", "Fantasy"],
    rate: 8.6,
    poster: "https://image.tmdb.org/t/p/original/8VG8fDNiy50H4FedGwdSVUPoaJe.jpg",
    src: "https://player.cuevana.biz/player.php?h=L_S5.I9TT8gF_oMzWJhf_dbm1dhZH0pTMDsZqEcgiNnEWsV.j4a0lS2rc.95m9HZ"
  },
  {
    title: "Gladiator",
    year: 2000,
    director: "Ridley Scott",
    duration: "2h 35min",
    genre: ["Action", "Adventure", "Drama"],
    rate: 8.5,
    poster: "https://image.tmdb.org/t/p/original/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg",
    src: "https://streamwish.to/e/q5wo8teegprd"
  },
  {
    title: "Django Unchained",
    year: 2012,
    director: "Quentin Tarantino",
    duration: "2h 45min",
    genre: ["Drama", "Western"],
    rate: 8.4,
    poster: "https://image.tmdb.org/t/p/original/7oWY8VDWW7thTzWh3OKYRkWUlD5.jpg",
    src: "https://player.cuevana.biz/player.php?h=dBbVI9ap4D2fPT2mxCbPOa3iD8PBIhOpRI5YHs_ISpKCITlTmaD2nkA_QEvtNW8D"
  },
  {
    title: "The Departed",
    year: 2006,
    director: "Martin Scorsese",
    duration: "2h 31min",
    genre: ["Crime", "Drama", "Thriller"],
    rate: 8.5,
    poster: "https://image.tmdb.org/t/p/original/nT97ifVT2J1yMQmeq20Qblg61T.jpg",
    src: "https://player.cuevana.biz/player.php?h=L_S5.I9TT8gF_oMzWJhf_QTxhcIcEE7Oir7pmb2FsS0hRV9qcI9BsqsI.x_0zIj."
  },
  {
    title: "The Prestige",
    year: 2006,
    director: "Christopher Nolan",
    duration: "2h 10min",
    genre: ["Drama", "Mystery", "Sci-Fi", "Thriller"],
    rate: 8.5,
    poster: "https://image.tmdb.org/t/p/original/tRNlZbgNCNOpLpbPEz5L8G8A0JN.jpg",
    src: "https://player.cuevana.biz/player.php?h=b4V4QCQH04mLSy2ukvmtf3d2IKqaA1AMJJJ24sh8R2m9t0AI3.OYJiDkzq.HZrNY"
  },
  {
    title: "The Social Network",
    year: 2010,
    director: "David Fincher",
    duration: "2h",
    genre: ["Biography", "Drama"],
    rate: 7.7,
    poster: "https://image.tmdb.org/t/p/original/n0ybibhJtQ5icDqTp8eRytcIHJx.jpg",
    src: "https://dood.to/e/gvs0mx2azyly"
  },
  {
    title: "Interstellar",
    year: 2014,
    director: "Christopher Nolan",
    duration: "2h 49min",
    genre: ["Adventure", "Drama", "Sci-Fi"],
    rate: 8.6,
    poster: "https://image.tmdb.org/t/p/original/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    src: "https://streamwish.to/e/8smb35bgv8oh"
  },
];

module.exports = tempData