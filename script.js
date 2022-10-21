import jsonData from './data.json' assert { type: 'json' };

function renderElements() {
  const list = document.getElementById('ul');
  const weekDay = new Date().toLocaleDateString('en-US', { weekday: 'short' }).toLowerCase();

	jsonData.forEach((element) => {
		list.insertAdjacentHTML('beforeend',
			`<li class="main-section__chart-element">
        <div class="main-section__chart-bar-wrapper">
          <div class="main-section__chart-amount">$${element.amount}</div>
          <div 
            class="main-section__chart-bar" 
            id="${element.day}" 
            style="height:${element.amount * 2.5}px"
          ></div>
          <p class="main-section__chart-paragraph">${element.day}</p>
        </div>
      </li>`
      );
      if (element.day === weekDay) {
        const item = document.getElementById(`${element.day}`);
        item.classList.add('active');
      };
    });
  };

renderElements();
