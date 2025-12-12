// --- Configuration ---
const BIRTHDAY = new Date('July 24, 2026 00:00:00').getTime();
const MS_PER_DAY = 1000 * 60 * 60 * 24;

// Array of Memories/Feelings (Customize this!)
// IMPORTANT: This array needs one entry for every day between today and July 24, 2026.
// Start with Day 1 (closest to today) and continue until the day BEFORE her birthday.



// --- Countdown & Memory Logic ---

function updateCountdown() {
    const now = new Date().getTime();
    
    // Calculate the difference in time
    const distance = BIRTHDAY - now;

    // Calculate the number of full days remaining
    const daysRemaining = Math.floor(distance / MS_PER_DAY);
    
    // Calculate the number of days PASSED since the start (Dec 12, 2025)
    // The start date is Dec 12, 2025. We need to find the difference between today and the start date.
    // For simplicity, let's just use the daysRemaining to index the array from the END.
    
    // Total days in the countdown (from Dec 12, 2025 to July 23, 2026)
    // Dec 12, 2025 to July 24, 2026 is 224 days.
    const totalDays = 224; // You might need to adjust this number by counting precisely!

    // The index for today's memory (start from day 0, the first day of the countdown)
    // If daysRemaining is 224, index is 0 (the first memory).
    // If daysRemaining is 1, index is 223 (the last memory).
    const memoryIndex = totalDays - daysRemaining - 1; // Subtract 1 because arrays are 0-indexed

    // Update the Countdown Display
    const countdownElement = document.getElementById('countdown');
    if (distance < 0) {
        // Birthday has passed
        countdownElement.innerHTML = "HAPPY BIRTHDAY!";
        document.getElementById('memory-text').innerHTML = "It's your special day! Let's celebrate all the memories we've made!";
        clearInterval(interval);
    } else {
        // Display days remaining
        countdownElement.innerHTML = daysRemaining;

        // Update the Memory Display
        const memoryTextElement = document.getElementById('memory-text');
        
        if (memoryIndex >= 0 && memoryIndex < dailyMemories.length) {
            // Display the memory for the current day
            memoryTextElement.innerHTML = dailyMemories[memoryIndex];
        } else if (memoryIndex < 0) {
            // This case should only happen if the start date is later than today (which it isn't)
            memoryTextElement.innerHTML = "The countdown hasn't started yet! (Check the memory list)";
        } else {
            // This case handles a mismatch between the totalDays count and the array length
            memoryTextElement.innerHTML = "We ran out of memories! But my feelings for you are infinite! ❤️";
        }
    }
}

// Update the countdown immediately and then every second
updateCountdown();
const interval = setInterval(updateCountdown, 1000 * 60 * 60 * 24); // Update every day (24 hours)
