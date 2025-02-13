import jdatetime


def default(request):
    context = {
        'current_year_shamsi' : jdatetime.datetime.now().year
    }
    return context