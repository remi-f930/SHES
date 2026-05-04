const C = {
  accent: '#e8c97a',
  green: '#4ade80',
  red: '#f87171',
  blue: '#60a5fa',
  purple: '#ba60fa',
  orange: '#faa060',
  dim: 'rgba(232,230,224,0.12)',
  text: 'rgba(232,230,224,0.55)',
  grid: 'rgba(255,255,255,0.06)',
};

function xAxis(opts = {}) {
  return {
    ticks: { color: C.text, font: { size: 11, family: "'DM Sans', sans-serif" }, ...opts },
    grid: { color: C.grid },
  };
}

function yAxis(callbackFn) {
  return {
    ticks: {
      color: C.text,
      font: { size: 11, family: "'DM Sans', sans-serif" },
      ...(callbackFn ? { callback: callbackFn } : {}),
    },
    grid: { color: C.grid },
  };
}

// Marché mondial de l'IA
new Chart(document.getElementById('marketChart'), {
  type: 'line',
  data: {
    labels: ['2020', '2021', '2022', '2023', '2024', '2025', '2026', '2027', '2028', '2029', '2030'],
    datasets: [{
      label: 'Marché IA (Mds $)',
      data: [50, 76, 120, 196, 298, 391, 520, 710, 990, 1350, 1800],
      borderColor: C.accent,
      backgroundColor: 'rgba(232,201,122,0.07)',
      borderWidth: 2,
      pointRadius: 3,
      pointBackgroundColor: C.accent,
      fill: true,
      tension: 0.35,
    }],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: false } },
    scales: {
      x: xAxis({ autoSkip: false, maxRotation: 0 }),
      y: yAxis(v => '$' + v + 'Md'),
    },
  },
});

// Investissements par région
new Chart(document.getElementById('regionChart'), {
  type: 'doughnut',
  data: {
    labels: ['États-Unis', 'Chine', 'Europe', 'Reste du monde'],
    datasets: [{
      data: [47, 25, 17, 11],
      backgroundColor: [C.accent, C.green, C.blue, C.red],
      borderWidth: 0,
    }],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: { callbacks: { label: ctx => ' ' + ctx.label + ' : ' + ctx.parsed + '%' } },
    },
  },
});

// Secteurs exposés à l'automatisation
new Chart(document.getElementById('secteurChart'), {
  type: 'bar',
  data: {
    labels: ['Finance', 'Logistique', 'Service client', 'Santé', 'Éducation', 'Construction'],
    datasets: [{
      label: '% tâches automatisables',
      data: [54, 52, 46, 36, 27, 18],
      backgroundColor: [C.accent, C.orange, C.red, C.blue, C.green, C.purple],
      borderWidth: 0,
      borderRadius: 1,
    }],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    indexAxis: 'y',
    plugins: { legend: { display: false } },
    scales: {
      x: { min: 0, max: 70, ...xAxis(), ticks: { ...xAxis().ticks, callback: v => v + '%' } },
      y: { ticks: { color: C.text, font: { size: 12 } }, grid: { color: 'transparent' } },
    },
  },
});

// Adoption IA en entreprise (France)
new Chart(document.getElementById('adoptionChart'), {
  type: 'bar',
  data: {
    labels: ['2021', '2022', '2023', '2024'],
    datasets: [{
      label: 'Adoption (%)',
      data: [8, 15, 23, 34],
      backgroundColor: [C.red, C.green, C.blue, C.accent],
      borderWidth: 0,
      borderRadius: 1,
    }],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: false } },
    scales: {
      x: xAxis({ autoSkip: false }),
      y: yAxis(v => v + '%'),
    },
  },
});

// Usages quotidiens
new Chart(document.getElementById('usageChart'), {
  type: 'doughnut',
  data: {
    labels: ['Assez souvent', 'Rarement', 'Jamais'],
    datasets: [{
      data: [34, 28, 38],
      backgroundColor: [C.accent, C.blue, C.green],
      borderWidth: 0,
    }],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: { callbacks: { label: ctx => ' ' + ctx.label + ' : ' + ctx.parsed + '%' } },
    },
  },
});
