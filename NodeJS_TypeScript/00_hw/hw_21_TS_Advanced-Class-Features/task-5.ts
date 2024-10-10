// Абстрактный класс Media ---------------------------------------------------------------

// Абстрактный класс Media
abstract class Media {
  abstract play(): void;
}

// Класс Audio, наследник Media
class Aud1o extends Media {
  play(): void {
    console.log("Playing audio");
  }
}

// Класс Video, наследник Media
class Video extends Media {
  play(): void {
    console.log("Playing video");
  }
}

const mediaItems: Media[] = [
  new Aud1o(),  // Создаем объект класса Audio
  new Video(),  // Создаем объект класса Video
];

// Вызов метода play() для каждого элемента массива
mediaItems.forEach((media) => {
  media.play();
});
