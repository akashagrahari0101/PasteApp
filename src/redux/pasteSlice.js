
import { createSlice } from '@reduxjs/toolkit';

// Load saved pastes from localStorage
const loadPastes = () => {
  try {
    const savedPastes = localStorage.getItem('pastes');
    return savedPastes ? JSON.parse(savedPastes) : [];
  } catch (error) {
    console.error('Error loading pastes:', error);
    return [];
  }
};

const initialState = {
  pastes: loadPastes(),
};

export const pasteSlice = createSlice({
  name: 'paste',
  initialState,

  reducers: {
    // Create Paste
    addToPastes: (state, action) => {
      state.pastes.push(action.payload);
    },

    // Update Paste
    updateTPastes: (state, action) => {
      const paste = action.payload;

      const index = state.pastes.findIndex(
        (item) => item._id === paste._id
      );

      if (index !== -1) {
        state.pastes[index] = paste;
      }
    },

    // Delete Paste
    removeFromPastes: (state, action) => {
      const pasteId = action.payload;

      state.pastes = state.pastes.filter(
        (item) => item._id !== pasteId
      );
    },

    // Delete All Pastes
    resetAllPastes: (state) => {
      state.pastes = [];
    },
  },
});

// Export actions
export const {
  addToPastes,
  updateTPastes,
  removeFromPastes,
  resetAllPastes,
} = pasteSlice.actions;

// Backward-compatible alias if another component uses updateToPastes
export const updateToPastes = updateTPastes;

export default pasteSlice.reducer;
