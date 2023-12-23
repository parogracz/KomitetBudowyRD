document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            window.scrollTo({
                top: targetElement.offsetTop - document.querySelector('header').offsetHeight,
                behavior: 'smooth'
            });
        });
    });
});

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

async function drawingNumbers(element) {
    let contentNumber = Number(element.textContent);
    let number = Math.floor(Math.random() * 10);
    while(contentNumber != number) {
        element.textContent = number;
        await sleep(100);
        number = Math.floor(Math.random() * 10)+1;
    }
    element.textContent = number;
}

async function progressBarFunc() {
    let cardHeader = $('#initiative .card-header');
    let cardText = $('#initiative .card-text');
    let progressBar = $('#initiative .progress-bar')
    let cardImg = $('#initiative .card-body img');
    while(true)
    {
        cardHeader.html("Założenie komitetu");
        cardText.html("Pojawienie się inicjatywy i założenie komitetu przez Miłosza Szubę.");
        progressBar.css('width','5%');
        cardImg.attr('src','img/crane.svg')
        await sleep(3000);
        cardHeader.html("Stworzenie statutu i zwiększenie liczebności komitetu");
        cardText.html("Spisanie statutu i regulaminu. Rozszenie komitetu przez kilku członków stowarzyszenia Prawe Miasto.");
        progressBar.css('width','20%');
        cardImg.attr('src','img/addMember.png')
        await sleep(4000);
        cardHeader.html("Koncepcja");
        cardText.html("Zaprojektowanie koncepcji budowy pomnika oraz jego lokalizacji.");
        progressBar.css('width','45%');
        cardImg.attr('src','img/concept.png')
        await sleep(4000);
        cardHeader.html("Złożenie wniosku");
        cardText.html("Złożenie wniosku o uwzględnienie budowy pomnika na biurko prezydenta miasta Otwock.");
        progressBar.css('width','60%');
        cardImg.attr('src','img/presidentTable.png')
        await sleep(4000);
        // cardHeader.html("Budowa");
        // progressBar.css('width','90%');
        // await sleep(3000);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    var canvas = document.getElementById('myChart');
    var ctx = canvas.getContext('2d');
  
    // Dane do wykresu
    var data = [10, 15, 20, 15, 20, 15, 25, 30, 30, 25, 25, 20, 25, 20, 15, 20, 20, 25, 25, 20, 15, 20, 25, 20, 15, 20];
  
    // Rysuj wykres liniowy
    drawLineChart(ctx, data, { color: '#333' });
    fillAreaUnderLine(ctx, data, { color: '#333' });
});
  
function drawLineChart(ctx, data, options) {
    var canvasWidth = ctx.canvas.width;
    var canvasHeight = ctx.canvas.height;
  
    var maxDataValue = Math.max(...data);
    var dataScale = canvasHeight / maxDataValue;
  
    var dataPoints = data.map(function (value, index) {
      return {
        x: index * (canvasWidth / (data.length - 1)),
        y: canvasHeight - value * dataScale
      };
    });
  
    ctx.beginPath();
    ctx.moveTo(dataPoints[0].x, dataPoints[0].y);
  
    dataPoints.forEach(function(point) {
      ctx.lineTo(point.x, point.y);
    });
  
    ctx.lineWidth = options.lineWidth || 2;
    ctx.strokeStyle = options.color || 'black';
    ctx.stroke();
    ctx.closePath();
}

function fillAreaUnderLine(ctx, data, options) {
    var canvasWidth = ctx.canvas.width;
    var canvasHeight = ctx.canvas.height;
  
    var maxDataValue = Math.max(...data);
    var dataScale = canvasHeight / maxDataValue;
  
    var dataPoints = data.map(function (value, index) {
      return {
        x: index * (canvasWidth / (data.length - 1)),
        y: canvasHeight - value * dataScale
      };
    });
  
    ctx.fillStyle = options.color || 'rgba(0, 0, 0, 0.2)';
    ctx.beginPath();
    ctx.moveTo(dataPoints[0].x, canvasHeight);
    dataPoints.forEach(function(point) {
      ctx.lineTo(point.x, point.y);
    });
    ctx.lineTo(dataPoints[dataPoints.length - 1].x, canvasHeight);
    ctx.closePath();
    ctx.fill();
  }

function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
        rect.bottom > 0 &&
        rect.right > 0 &&
        rect.left < (window.innerWidth || document.documentElement.clientWidth) &&
        rect.top < (window.innerHeight || document.documentElement.clientHeight)
    );
  }

  // Funkcja do obsługi lazy loading
function lazyLoad() {
    $('.lazy-load').each(function() {
      if (isElementInViewport(this)) {
        // Jeżeli blok jest widoczny, wykonaj odpowiednie akcje (np. wczytanie treści)
        $(this).addClass('lazyvisible');
        //$(this).removeClass('lazy-load');
        $(this).trigger('IsLoaded');
      }
    });
  }