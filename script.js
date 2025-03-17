document.addEventListener('DOMContentLoaded', () => {
    // Initial setup
    updateAvailableCount();
    checkParkingStatus();

    // Simulate slot status changes every few seconds
    setInterval(() => {
        const randomSlot = Math.floor(Math.random() * 4) + 1;
        toggleSlotStatus(randomSlot);
    }, 5000);
});

function updateAvailableCount() {
    const availableSlots = document.querySelectorAll('.slot-status.available').length;
    const totalSlots = document.querySelectorAll('.parking-slot').length;
    
    document.getElementById('available-count').textContent = availableSlots;
    document.getElementById('total-count').textContent = totalSlots;
    
    checkParkingStatus();
}

function checkParkingStatus() {
    const availableSlots = document.querySelectorAll('.slot-status.available').length;
    const statusIndicator = document.getElementById('status-indicator');
    
    if (availableSlots === 0) {
        statusIndicator.classList.remove('hidden');
    } else {
        statusIndicator.classList.add('hidden');
    }
}

function toggleSlotStatus(slotNumber) {
    const slot = document.querySelector(`[data-slot="${slotNumber}"] .slot-status`);
    
    if (slot.classList.contains('available')) {
        slot.classList.remove('available');
        slot.classList.add('occupied');
    } else {
        slot.classList.remove('occupied');
        slot.classList.add('available');
    }
    
    updateAvailableCount();
}