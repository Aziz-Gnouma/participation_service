// participationRoutes.ts
import express from 'express';
import {
  getParticipations,
  createParticipation,
  deleteParticipation,
  getParticipationById,
  getParticipationByIdAndEtat,
  countParticipationsByCarpoolingIDAndEtat,
  countParticipationsAnnule,
  getParticipationsByClientId,
} from '../controllers/participationController';

const router = express.Router();

router.get('/participation', getParticipations);
router.post('/participation', createParticipation);
router.delete('/participation/:id', deleteParticipation);
router.get('/participation/:id', getParticipationById);
router.get('/participationCount', countParticipationsByCarpoolingIDAndEtat);
router.get('/participationAnnuledCount', countParticipationsAnnule);
router.get('/participations/:id', getParticipationsByClientId);

router.get('/participationEtat', getParticipationByIdAndEtat);



export default router;