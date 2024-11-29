import express from 'express';
import { protect, authorize, AuthRequest } from '../middleware/auth';
import User from '../models/User';

const router = express.Router();

// Get all users (admin and moderator only)
router.get('/', protect, authorize('admin', 'moderator'), async (req: AuthRequest, res) => {
  try {
    let query = User.find().select('-password');
    
    // If moderator, exclude admin users from the results
    if (req.user.role === 'moderator') {
      query = query.where('role').ne('admin');
    }
    
    const users = await query;
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Update user role (admin only)
router.patch('/:id/role', protect, authorize('admin'), async (req: AuthRequest, res) => {
  try {
    // Prevent admin from changing their own role
    if (req.params.id === req.user.id) {
      return res.status(400).json({ message: 'Cannot change your own role' });
    }

    const user = await User.findByIdAndUpdate(
      req.params.id,
      { role: req.body.role },
      { new: true }
    ).select('-password');

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json(user);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Delete user (admin only)
router.delete('/:id', protect, authorize('admin'), async (req: AuthRequest, res) => {
  try {
    // Prevent admin from deleting themselves
    if (req.params.id === req.user.id) {
      return res.status(400).json({ message: 'Cannot delete your own account' });
    }

    const user = await User.findByIdAndDelete(req.params.id);
    
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

export default router;