window.addEventListener("load", () => {
	const canvas = document.getElementById("canvas");
	const ctx = canvas.getContext("2d");

	// Draw the ring on the canvas
	const ring = new Image();
	ring.src = "ring.png";
	ring.addEventListener("load", () => {
		ctx.drawImage(ring, 0, 0, canvas.width, canvas.height);
	});

	// Adjust the size of the circle on the screen to fit the ring
	const adjustCircle = () => {
		// Clear the canvas
		ctx.clearRect(0, 0, canvas.width, canvas.height);

		// Draw the ring
		ctx.drawImage(ring, 0, 0, canvas.width, canvas.height);

		// Draw the circle
		const circleRadius = (canvas.width / 4) * (document.getElementById("size-slider").value / 50);
		ctx.beginPath();
		ctx.arc(canvas.width / 2, canvas.height / 2, circleRadius, 0, 2 * Math.PI);
		ctx.strokeStyle = "red";
		ctx.lineWidth = 5;
		ctx.stroke();
	}

	// Call the adjustCircle function on window resize
	window.addEventListener("resize", adjustCircle);

	// Call the adjustCircle function on page load
	adjustCircle();

	// Call the adjustCircle function when the size slider is moved
	const sizeSlider = document.getElementById("size-slider");
	sizeSlider.addEventListener("input", adjustCircle);

	// Measure the size of the ring when the measure button is clicked
	const measureBtn = document.getElementById("measure-btn");
	measureBtn.addEventListener("click", () => {
		const circleRadius = (canvas.width / 4) * (document.getElementById("size-slider").value / 50);
		const ringRadius = 2.5 * (circleRadius / (canvas.width / 4)); // This value will depend on the size of the ring in the image
		const ringSize = ringRadius * 2;
		document.getElementById("result").textContent = `The size of the ring is ${ringSize} mm.`;
	});
});
