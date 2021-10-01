// add link for article content(only used in no marked text)
// for security, now only support b23.tv/ and *.bilibili.com/

export function textToLink(content: string): string {
  // replace before html tag
  content = content.replace(/<\/?[\S ]+>/g, '')

  const regex = /(https?:\/\/|){0,1}(b23\.tv\/(BV)?[\w\d]{0,10}|\w+\.bilibili.com\/[\w\d\/\?=&#]+)/g

  const parseLink = (url: string) => {
    //if not include http, add it
    url = url.startsWith('http') ? url : `https://${url}`
    return `<a href=${url} target="_blank">${url}</a>`
  }

  // replace url in regex to a tag
  const linkedText = content.replace(regex, (s) => parseLink(s))

  return linkedText
}
