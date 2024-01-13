import React from 'react'

export default function Pagination() {



    return (
        <div>
            <nav aria-label="Page navigation example">
                <ul class="pagination">
                    <li class="page-item"><a class="page-link" disabled={this.state.page <= 1} onClick={this.prevPage} href="#"> &larr; Previous</a></li>
                    <li class="page-item"><a class="page-link" href="#">1</a></li>
                    <li class="page-item"><a class="page-link" href="#">2</a></li>
                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                    <li class="page-item"><a class="page-link" onClick={this.nextPage} href="#">Next &rarr;</a></li>
                </ul>
            </nav>
        </div>
    )
}
