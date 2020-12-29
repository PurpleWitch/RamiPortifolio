from django.shortcuts import render

from django.http import HttpResponse

from .models import book

# Create your views here.
def index(req):
    return HttpResponse('test test')
    temp = 'index.html'
    def get(self, req):
        return render(req, self.temp)

def book_by_id(req, book_id):
    boo = book.objects.get(pk=book_id)
    return render(req, 'homepage.html', {'book': boo})