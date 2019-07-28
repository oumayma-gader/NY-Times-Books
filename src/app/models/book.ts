export class Book{
    list_name? : string;
    display_name? : string;
    bestsellers_date? : Date;
    published_date? : Date;
    amazon_product_url? : string;
    book_details : [{
        title? : string;
        description? : string;
        contributor? : string;
        author? : string;
        publisher? : string;
    }]
    reviews? : [{
        book_review_link? : string;
        first_chapter_link? : string;
        sunday_review_link? : string;
        article_chapter_link? : string;
    }]
}