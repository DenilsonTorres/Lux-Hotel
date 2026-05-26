const ctx = document.getElementById("reservasChart");

new Chart(ctx, {
  type: "line",
  data: {
    labels: ["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"],
    datasets: [
      {
        label: "Reservas",
        data: [12, 19, 10, 16, 22, 18, 25],
        borderColor: "#f5c542",
        backgroundColor: "rgba(245, 197, 66, 0.2)",
        tension: 0.1,
        fill: true,
      },
    ],
  },

  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        labels: {
          color: "#fff",
        },
      },
    },

    scales: {
      x: {
        ticks: {
          color: "#aaa",
        },
      },

      y: {
        ticks: {
          color: "#aaa",
        },
      },
    },
  },
});
