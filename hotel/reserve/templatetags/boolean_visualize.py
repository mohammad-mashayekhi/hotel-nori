from django import template
from django.utils.safestring import mark_safe

register = template.Library()


# replace the boolean value with a icon
@register.simple_tag
def render_boolean_icon(boolean_value):
    if boolean_value:
        icon_html = '&#10003;'  # Replace with Checkmark symbol if boolean was True
    else:
        icon_html = '&#10005;'  # Replace with Cross symbol if boolean was False

    return mark_safe(icon_html)
