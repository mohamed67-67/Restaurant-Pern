import express from 'express'
import { AddingReview } from '../controllers/Reviews.js'

export const postingReview =express.Router()



postingReview.post('/reviews/:id',AddingReview)