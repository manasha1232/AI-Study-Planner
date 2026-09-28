import { z } from 'zod';

/**
 * Validation schema for Day 1 (Part 17/15): Add input validation and constraint rules for Schedule
 * Project: AI Study Planner
 */
export const schedule.validatorSchema = z.object({
  id: z.string().uuid().optional(),
  title: z.string().min(2, 'Title must contain at least 2 characters').max(200),
  description: z.string().optional(),
  status: z.enum(['ACTIVE', 'INACTIVE', 'PENDING', 'COMPLETED']).default('ACTIVE'),
  priority: z.enum(['LOW', 'MEDIUM', 'HIGH', 'URGENT']).default('MEDIUM'),
  metadata: z.record(z.any()).optional(),
  createdAt: z.date().optional(),
});

export type schedule.validatorInput = z.infer<typeof schedule.validatorSchema>;

export const validateschedule.validator = (payload: unknown) => {
  return schedule.validatorSchema.safeParse(payload);
};
