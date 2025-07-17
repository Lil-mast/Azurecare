document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search-input');
    const hospitalGrid = document.getElementById('hospital-grid');
    const symptomInput = document.getElementById('symptom-input');
    const symptomButton = document.getElementById('symptom-button');

    const hospitals = [
        {
            name: 'Nairobi General Hospital',
            description: 'Leading hospital in Nairobi',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCjJBpxWfQjmmVXzkUd_3Q_iHgJpAn4RA6oTgS9VB6ZqyQuLxu3YJHa0HHbY_fRkupO3FtTlLwG2vp3PuTabHlcr4gtlnpU0PtfNwihSvdS3fcTyC6CNoymwdJx_AOunqexk6puFXO6Eoo9MmPreiUR5CWeHpx6SjxLz10ATopQBJ8e8cw3z2Xik0MrZTpEArosMD7Vra8e1Rjs4WY2kzkZQUieKuDH9phS4lB75BEGDg6DuYP_8JqmbdfXnpTOBKfaozvF1qMozFE'
        },
        {
            name: 'Aga Khan University Hospital',
            description: 'University hospital with modern facilities',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAhrva-IXDntThB1YPV8L2Y2-RorHBJoC3yC2D1R_SCigOKtPJfJt_icQcndsp6UNm4DPYb6qBo5qC_TJHTl7NBvrzzFyoRZBeChL0TlPzcqhIZgDfSup-uGcyFQPQ8iWzf7mMAyGTlggGTeURkmToVW0InNVZAJjwglwiTPESbAbK73GW5EHR0_alNNwqqDDobT1qzPLK3sOKlgas8KYhFOpVvbXYJxZV5Cq9lY7b7pWaNMzHqvA4z732cw4YG_Nl3ftJecQAiUrg'
        },
        {
            name: 'Mater Hospital',
            description: 'Hospital with a focus on patient care',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBVVNntcGJoGnkjT5q-gOH1IopZXl-sXRylJHC642smZNyPi8_8KRkPepK1E1PrEbvYUhlypLRszT_dEFhuS6inGCAkjUYKO8_FN1Y6ZUw3Dk_AHFFfn8nyTw_svZ4hAxLtQdYfnIR962l7cuy_1wU9iKsIU0SVpqPidSpKsvjzVNoU14vZAhHzsPl1YgkAYwdxgcdc3DMAftOHOaVWUak0l6GlKj0rMiFz3WpDq7sIr6qMlKWHlo4mkOPGkrbk-Vth72JKrsqknng'
        }
    ];

    const renderHospitals = (filteredHospitals) => {
        hospitalGrid.innerHTML = '';
        filteredHospitals.forEach(hospital => {
            const hospitalCard = `
                <div class="card flex h-full flex-col gap-4 rounded-xl p-4">
                    <div class="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg" style='background-image: url("${hospital.image}");'></div>
                    <div>
                        <p class="text-base font-semibold leading-normal">${hospital.name}</p>
                        <p class="text-sm font-normal leading-normal text-[var(--muted-text-color)]">${hospital.description}</p>
                    </div>
                </div>
            `;
            hospitalGrid.innerHTML += hospitalCard;
        });
    };

    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const filteredHospitals = hospitals.filter(hospital =>
            hospital.name.toLowerCase().includes(searchTerm) ||
            hospital.description.toLowerCase().includes(searchTerm)
        );
        renderHospitals(filteredHospitals);
    });

    symptomButton.addEventListener('click', () => {
        const symptoms = symptomInput.value.toLowerCase();
        if (symptoms.includes('fever') || symptoms.includes('cough') || symptoms.includes('headache')) {
            alert('Based on your symptoms, we recommend you to visit a general physician. Please search for a nearby hospital.');
        } else {
            alert('Please enter your symptoms to get advice.');
        }
    });

    renderHospitals(hospitals);
});
