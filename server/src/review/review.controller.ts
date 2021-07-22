import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post } from '@nestjs/common';
import { CreateReviewlDto } from './dto/create-review.dto';
import { REVIEW_NOT_FOUND } from './review.constants';
import { ReviewService } from './review.service';

@Controller('review')
export class ReviewController {
	
	constructor(private readonly reviewService: ReviewService) {}

	@Post('create')
	async create(@Body() dto: CreateReviewlDto) {
		this.reviewService.create(dto);
	}

	@Get('byProduct/:productId')
	async getByProduct(@Param('productId') productId: string) {
		this.reviewService.findByProductId(productId);
	}

	@Delete(':id')
	async delete(@Param('id') id: string) {
		const deleteDoc = await this.reviewService.delete(id);
		if (!deleteDoc) {
			throw new HttpException(REVIEW_NOT_FOUND, HttpStatus.NOT_FOUND);
		}
	}
}
