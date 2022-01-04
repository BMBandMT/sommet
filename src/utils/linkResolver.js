exports.linkResolver = doc => {
  console.log(doc)
  switch (doc.type) {
    case "blog": {
      return `/${doc.lang}/blog/${doc.uid}`
    }

    case "pa": {
      return `/${doc.lang}/${doc.uid}`
    }

    default:
      return `/${doc.lang}`
  }
}
