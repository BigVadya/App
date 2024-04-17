from django.shortcuts import render


def index(request):
	template = 'main/index.html'
	return render(request, template)
		
def ilon(request):
  template = 'main/ilon.html'
  return render(request, template)

def dom(request):
  template = 'main/dom.html'
  return render(request, template)

def besos(request):
  template = 'main/besos.html'
  return render(request, template)

def bill(request):
  template = 'main/bill.html'
  return render(request, template)

def mark(request):
  template = 'main/mark.html'
  return render(request, template)

def ophra(request):
  template = 'main/ophra.html'
  return render(request, template)

def obama(request):
  template = 'main/obama.html'
  return render(request, template)

def einstein(request):
  template = 'main/einstein.html'
  return render(request, template)

def chanel(request):
  template = 'main/chanel.html'
  return render(request, template)

def nelson(request):
  template = 'main/nelson.html'
  return render(request, template)