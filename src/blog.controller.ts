import { Controller, Param, Body, Delete, Get, Post, Put } from "@nestjs/common"; // 1. 데코레이터 함수 임포트

@Controller('blog') // 2. 클래스에 붙이는 Controller 데코레이터터
export class BlogController {
    @Get() // 3. Get 요청 처리
    getAllPosts() {
        console.log('모든 게시글 가져오기');
    }

    @Post() // 4. Post 요청 처리
    createPost(@Body() post: any) { // 5. HTTP 요청의 body 내용을 post에 할당
        console.log('게시글 작성');
        console.log(post);
    }

    @Get('/:id') // 6. Get에 url 매개변수에 id가 있는 요청 처리
    getPost(@Param('id') id: string) {
        console.log(`[id: ${id}]게시글 하나 가져오기`);
    }

    @Delete('/:id') // 7. Delete 방식에 url 매개변수로 id가 있는 요청 처리
    deletePost() {
        console.log('게시글 삭제');
    }

    @Put('/:id') // 8. Put 방식에 url 매개변수로 전달된 id가 있는 요청 처리
    updatePost(@Param('id') id, @Body() post: any) {
        console.log(`[${id}] 게시글 업데이트`);
        console.log(post);
    }
}   